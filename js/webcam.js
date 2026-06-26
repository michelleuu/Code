// Shared across trials; null means webcam was denied or unavailable
let webcamStream = null;
let mediaRecorder = null;
let captureActive = false;

// Call once at startup to request camera permission
export async function initWebcam() {
  try {
    webcamStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    console.log("Webcam ready");
  } catch (e) {
    console.warn("Webcam unavailable:", e);
    webcamStream = null;
  }
}

// Exposes the raw MediaStream for attaching a live preview element
export function getStream() {
  return webcamStream;
}

// Records one trial; chunks accumulate every 200 ms and are saved as a .webm on stop
export function startCapture(trialUid) {
  if (!webcamStream || captureActive) return;
  const chunks = [];
  try {
    mediaRecorder = new MediaRecorder(webcamStream);
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };
    mediaRecorder.onstop = () => {
      if (!chunks.length) return;
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      // Programmatic anchor click is the only reliable cross-browser way to name a download
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

// onstop fires automatically after stop(), triggering the download in startCapture
export function stopCapture() {
  if (!captureActive || !mediaRecorder) return;
  captureActive = false;
  mediaRecorder.stop();
}
