"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useMediaQuery } from "@/lib/useMediaQuery"
import { Badge } from "../ui/badge"

export type Item = {
  label: string
  id: string
  tags?: string[]
}

type ItemSearcherProps = {
  items: Item[]
  onCreateNew?: () => void
}

export const ItemSearcher: React.FC<ItemSearcherProps> = ({ items, onCreateNew }) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [selectedItem, setSelectedItem] = React.useState<Item | null>(null)

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedItem ? <>{selectedItem.label}</> : <>Select Lesson</>}
          </Button>
        </PopoverTrigger>
        <div className="flex gap-2">{selectedItem?.tags?.map((tag) => <Badge>{tag}</Badge>)}</div>
        <PopoverContent className="w-[200px] p-0" align="start">
          <ItemList items={items} setOpen={setOpen} setSelectedItem={setSelectedItem} onCreateNew={onCreateNew} />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedItem ? <>{selectedItem.label}</> : <>Select Lesson</>}
        </Button>
      </DrawerTrigger>
      {selectedItem?.tags?.map((tag) => <Badge>{tag}</Badge>)}
      <DrawerContent>
        <div className="mt-4 border-t">
          <ItemList items={items} setOpen={setOpen} setSelectedItem={setSelectedItem} onCreateNew={onCreateNew} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function ItemList({
  items,
  setOpen,
  setSelectedItem,
  onCreateNew,
}: {
  items: Item[]
  setOpen: (open: boolean) => void
  setSelectedItem: (status: Item | null) => void
  onCreateNew?: () => void
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter lessons..." />
      <CommandList>
        <CommandEmpty>
          {!onCreateNew ? (
            "No resultz found."
          ) : (
            <Button variant="ghost" onClick={onCreateNew}>
              Create new
            </Button>
          )}
        </CommandEmpty>
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
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
