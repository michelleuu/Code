# Project Description

## Syncing WebGazer Eye Tracking with Webcam Video

Both WebGazer and Webcam uses the computer's internal timer (performance.now()), but they don't start at exactly the same moment. The eye tracker usually starts a few milliseconds before the webcam recording.

There fore these variables are used to help align the timestamps:

- webgazer_trial_start_perf_ms: when eye tracking started.
- video_start_perf_ms: when the webcam recording started.

video_position_ms = gaze_t - (video_start_perf_ms - webgazer_trial_start_perf_ms)

For each eye-tracking sample, subtract the offset to get the correct frame in the webcam.

## Which field to use

- `feedback_eye_moves_raw` contains `{x, y, t}` samples with real timestamps captured by a custom listener.
- `webgazer_data` is jsPsych's own internal collection and always has `t: null` because WebGazer 3.3.0 does not provide timestamps in its predictions.
