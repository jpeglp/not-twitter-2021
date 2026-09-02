/* eslint-disable no-undef */

const bufferModule = require('buffer');
const nodeBufferModule = require('node:buffer');

function ensureSlowBuffer(target) {
  if (!target || typeof target !== 'object') {
    return;
  }

  const BufferCtor = target.Buffer;
  if (!BufferCtor || typeof BufferCtor !== 'function') {
    return;
  }

  const slowBuffer = BufferCtor.allocUnsafeSlow || BufferCtor;

  if (typeof BufferCtor.SlowBuffer === 'undefined') {
    BufferCtor.SlowBuffer = slowBuffer;
  }

  if (typeof target.SlowBuffer === 'undefined') {
    target.SlowBuffer = BufferCtor.SlowBuffer;
  }
}

ensureSlowBuffer(bufferModule);
ensureSlowBuffer(nodeBufferModule);
ensureSlowBuffer(global);

if (typeof global.Buffer === 'undefined') {
  global.Buffer = bufferModule.Buffer;
}
