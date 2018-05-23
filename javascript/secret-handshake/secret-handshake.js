class SecretHandshake {
  constructor(code) {
    if (!/^[0-9]*$/.test(code)) throw new Error('Handshake must be a number')
    this.code = (code >>> 0).toString(2)
    this.actions = [
      'wink',
      'double blink',
      'close your eyes',
      'jump',
      'reverse',
    ]
  }

  commands() {
    const includeCommands = this.code
      .split('')
      .reverse()
      .map((command, index) => ({
        action: this.actions[index],
        present: command === '1',
      }))
    const commandsPresent = includeCommands.filter((command) => command.present)
    const commands = commandsPresent.map(
      (commandPresent) => commandPresent.action,
    )
    const reversedCommands = commands.includes('reverse')
      ? commands.reverse()
      : commands
    const reversedRemoved = reversedCommands.filter(
      (command) => command !== 'reverse',
    )

    return reversedRemoved
  }
}

module.exports = SecretHandshake
