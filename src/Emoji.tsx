import React, { memo } from 'react'
import { Text } from 'react-native'

function countryCodeToFlagEmoji(countryCode: string) {
  if (!countryCode) return '';
  return countryCode
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
}

const Emoji = memo(({ name }: { name: string }) => {
  // name is expected to be like 'flag-us', so extract the country code
  const match = name.match(/^flag-([a-z]{2})$/i)
  const flagEmoji = match ? countryCodeToFlagEmoji(match[1]) : ''
  return <Text allowFontScaling={false}>{flagEmoji}</Text>
})

export { Emoji }
