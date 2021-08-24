import store from "./store"

export function RecordStartStop(payload) {
  return store.dispatch(Recorder(payload))
}

export function Recorder(payload) {
  return {
    type: "ISRECORD",
    payload,
  }
}