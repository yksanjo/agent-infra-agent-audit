import { describe, it } from 'node:test';
import assert from 'node:assert';
import { AgentAudit } from '../src/index.js';

describe('AgentAudit', () => {
  it('should initialize', async () => {
    const instance = new AgentAudit();
    await instance.initialize();
    assert.ok(instance);
  });

  it('should execute successfully', async () => {
    const instance = new AgentAudit();
    const result = await instance.execute({ test: 'data' });
    assert.strictEqual(result.success, true);
  });
});
