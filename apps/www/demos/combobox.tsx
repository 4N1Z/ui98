"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "ui98"

const engines = [
  "AltaVista",
  "Ask Jeeves",
  "Excite",
  "HotBot",
  "Infoseek",
  "Lycos",
  "WebCrawler",
  "Yahoo!",
]

export default function ComboboxDemo() {
  return (
    <Combobox items={engines}>
      <ComboboxInput placeholder="Choose a search engine..." />
      <ComboboxContent>
        <ComboboxEmpty>No search engines found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
