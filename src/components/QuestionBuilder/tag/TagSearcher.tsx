"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useMediaQuery } from "@/lib/useMediaQuery"
import { TagCreateForm } from "./TagCreateForm"
import { Tag } from "@/ogm-resolver/ogm-types"

type TagSearcherProps = {
  tags: Tag[]
  selectedTag: Tag | null
  onSelect: (tag: Tag | null) => void
  onCreateNew: () => void
}

export const TagSearcher: React.FC<TagSearcherProps> = ({ tags, selectedTag, onSelect, onCreateNew }) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedTag ? <>{selectedTag.name.en}</> : <>Select Lesson</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <TagList items={tags} setOpen={setOpen} setSelectedItem={onSelect} onCreateNew={onCreateNew} />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedTag ? <>{selectedTag.name.en}</> : <>Select Lesson</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <TagList items={tags} setOpen={setOpen} setSelectedItem={onSelect} onCreateNew={onCreateNew} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function TagList({
  items,
  setOpen,
  setSelectedItem,
  onCreateNew,
}: {
  items: Tag[]
  setOpen: (open: boolean) => void
  setSelectedItem: (tag: Tag | null) => void
  onCreateNew: () => void
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter lessons..." />
      <CommandList>
        <CommandEmpty>Nothing Found...</CommandEmpty>
        <CommandGroup>
          {items.map((item) => (
            <CommandItem
              key={item.id}
              value={item.id}
              onSelect={(id) => {
                setSelectedItem(items.find((priority) => priority.id === id) || null)
                setOpen(false)
              }}
            >
              {item.name.en}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
