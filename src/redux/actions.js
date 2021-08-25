import store from "./store"

export function RecordStartStop(payload) {
  return store.dispatch(Recorder(payload))
}

export function Recorder(payload) {
  return {
    type: "ISRECORD",
    isRecord: payload,
  }
}

export function ClockStartStop(payload) {
  return store.dispatch(Clock(payload))
}

export function Clock(payload) {
  return {
    type: "ISCLOCK",
    isClock: payload,
  }
}

export function RecordingStopped(payload) {
  return store.dispatch(RecordStopped(payload))
}

export function RecordStopped(payload) {
  return {
    type: "ISRECORDSTOPPED",
    isRecordStopped: payload,
  }
}