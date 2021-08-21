export async function startRecording(setRecorderState) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

    setRecorderState((prevState) => {
      return {
        ...prevState,
        initRecording: true,
        mediaStream: stream,
      };
    });
  } catch (error) {
    console.log(error.message);
  }
}

export function saveRecording(recorder) {
  // console.log(recorder);
  if (recorder.state !== "inactive") recorder.stop();
}