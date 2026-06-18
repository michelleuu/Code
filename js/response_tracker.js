/* Per-trial answer-behavior tracker factory.
 * taskT0: performance.now() reference from when the task stage started.
 * Returns { attachToInput, attachToChoices, trackKey, recordSubmit, cleanup, getSummary }.
 * getSummary(type, finalResponse) — type: "input" | "choice" */
export function makeResponseTracker(taskT0) {
  const elapsed = () => Math.round(performance.now() - taskT0);
  const history = [];
  let firstResponse = null, timeToFirst = null, changeCount = 0;
  let erases = 0, focusBlurs = 0;
  let firstChoice = null, finalChoice = null;
  let changedChoice = false, choiceChangeCount = 0;
  const cleanups = [];

  function attachToInput(el) {
    const onInput = function () {
      const val = el.value, t = elapsed();
      if (firstResponse === null) { firstResponse = val; timeToFirst = t; }
      else changeCount++;
      history.push({ event_type: "input", value: val, key: null, t_ms: t });
    };
    const onFocus = function () {
      focusBlurs++;
      history.push({ event_type: "focus", value: el.value, key: null, t_ms: elapsed() });
    };
    const onBlur = function () {
      focusBlurs++;
      history.push({ event_type: "blur", value: el.value, key: null, t_ms: elapsed() });
    };
    el.addEventListener("input", onInput);
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
    cleanups.push(() => {
      el.removeEventListener("input", onInput);
      el.removeEventListener("focus", onFocus);
      el.removeEventListener("blur", onBlur);
    });
  }

  function attachToChoices(radios) {
    radios.forEach((radio) => {
      const onChange = function () {
        const val = this.value, t = elapsed();
        if (firstChoice === null) { firstChoice = val; firstResponse = val; timeToFirst = t; }
        else { changedChoice = true; choiceChangeCount++; changeCount++; }
        finalChoice = val;
        history.push({ event_type: "selection", value: val, key: null, t_ms: t });
      };
      radio.addEventListener("change", onChange);
      cleanups.push(() => radio.removeEventListener("change", onChange));
    });
  }

  function trackKey(key, value) {
    erases++;
    history.push({
      event_type: key === "Backspace" ? "backspace" : "delete",
      value, key, t_ms: elapsed(),
    });
  }

  function recordSubmit(finalVal) {
    history.push({ event_type: "submit", value: finalVal, key: null, t_ms: elapsed() });
  }

  function cleanup() { cleanups.forEach((fn) => fn()); }

  function getSummary(type, finalResponse) {
    const base = {
      final_response: finalResponse,
      first_response: firstResponse,
      response_changed: type === "input" ? erases > 0 : changedChoice,
      change_count: changeCount,
      time_to_first_response_ms: timeToFirst,
      response_history_json: JSON.stringify(history),
    };
    if (type === "input")
      return { ...base, erase_count: erases, focus_blur_count: focusBlurs };
    if (type === "choice")
      return { ...base, first_choice: firstChoice, final_choice: finalChoice ?? finalResponse, changed_choice: changedChoice, choice_change_count: choiceChangeCount };
    return base;
  }

  return { attachToInput, attachToChoices, trackKey, recordSubmit, cleanup, getSummary };
}
