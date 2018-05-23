function Bob() {
  this.responses = {
    calmDown: "Calm down, I know what I'm doing!",
    chillOut: 'Whoa, chill out!',
    sure: 'Sure.',
    whatever: 'Whatever.',
    fine: 'Fine. Be that way!',
  }
}

Bob.prototype.hey = function(message) {
  const messageTrimmed = message.trim()

  if (!messageTrimmed) {
    return this.responses.fine
  } else if (messageTrimmed.endsWith('?')) {
    if (hasLowerCase(messageTrimmed) || hasNumeric(messageTrimmed)) {
      return this.responses.sure
    } else return this.responses.calmDown
  } else if (!hasLowerCase(messageTrimmed)) {
    return this.responses.chillOut
  } else {
    return this.responses.whatever
  }
}

const hasLowerCase = (message) => /[a-z]/.test(message)
const hasNumeric = (message) => /[0-9]/.test(message)

const isAllCaps = (message) => {
  for (char of message) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) continue
    else return false
  }
  return true
}

module.exports = Bob
