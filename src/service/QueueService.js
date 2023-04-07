/* eslint-disable require-jsdoc */
import { Service } from '@easyex/core';

@Service
class QueueService {
  queue = [];

  worker;

  constructor(worker) {
    this.worker = worker;
  }

  exec() {
    this.worker.exec(this.queue[0]);
    this.queue.shift();
  }

  discard(id) {
    const index = this.queue.findIndex(e => e.id === id);
    if (index !== -1) {
      this.queue.splice(index, 1);
    }
  }

  push(data) {
    this.queue.push(data);
  }
}

export default QueueService;
