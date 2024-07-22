import * as core from '@actions/core'
import { wait } from './wait'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const stepsContext: string = core.getInput('stepsContext')
    console.log('steps context = $stepsContext');
    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.info(`stepContext: ${stepsContext}`)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
