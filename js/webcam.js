let webcamStream = null;
let mediaRecorder = null;
let captureActive = false;

export async function initWebcam() {
  try {
    webcamStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    console.log("Webcam ready");
  } catch (e) {
    console.warn("Webcam unavailable:", e);
    webcamStream = null;
  }
}

export function getStream() {
  return webcamStream;
}

export function startCapture(trialUid) {
  if (!webcamStream || captureActive) return;
  const chunks = [];
  try {
    mediaRecorder = new MediaRecorder(webcamStream);
    mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };
    mediaRecorder.onstop = () => {
      if (!chunks.length) return;
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${trialUid}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      console.log("Capture saved:", trialUid);
    };
    mediaRecorder.start(200);
    captureActive = true;
    console.log("Capture started:", trialUid);
  } catch (e) {
    console.warn("MediaRecorder error:", e);
    captureActive = false;
  }
}

export function stopCapture() {
  if (!captureActive || !mediaRecorder) return;
  captureActive = false;
  mediaRecorder.stop();
}
