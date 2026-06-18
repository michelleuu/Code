export function downloadFile(content, name, type) {
  const blob = new Blob([content], { type: type + ";charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function J(v) {
  return JSON.stringify(v);
}

export function isPositiveEmotion(e) {
  return e === "pride" || e === "relief";
}

export function extractWebgazerPoints(data, stageName) {
  const raw = data.webgazer_data || data.gaze_data || [];
  const pts = [];
  for (const r of raw) {
    const x = r.x ?? r.gaze_x, y = r.y ?? r.gaze_y;
    if (Number.isFinite(x) && Number.isFinite(y))
      pts.push({ stage: stageName, x, y, t: r.t || r.time || null });
  }
  return pts;
}
