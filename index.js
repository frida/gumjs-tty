export default {
  isatty,
  ReadStream,
  WriteStream,
};

export function isatty() {
  return false;
}

export function ReadStream() {
  throw new Error('tty.ReadStream is not implemented');
}

export function WriteStream() {
  throw new Error('tty.WriteStream is not implemented');
}
