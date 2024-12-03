"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useMediaQuery } from "@/lib/useMediaQuery"
import { Badge } from "../ui/badge"

type ItemSearcherProps<T extends Record<string, any>> = {
  items: T[]
  labelKey: keyof T
  selectedItem: T | null
  onSelect: (item: T | null) => void
  idKey?: keyof T
  tagsKey?: keyof T
}

export function ItemSearcher<T extends Record<string, any>>({
  items,
  labelKey,
  selectedItem,
  onSelect,
  idKey = "id",
  tagsKey = "tags",
}: ItemSearcherProps<T>) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedItem ? <>{selectedItem[labelKey].en}</> : <>Select Item</>}
          </Button>
        </PopoverTrigger>
        <div className="flex gap-2">
          {selectedItem &&
            Array.isArray(selectedItem[tagsKey]) &&
            selectedItem[tagsKey].map((tag: string, index: number) => <Badge key={index}>{tag}</Badge>)}
        </div>
        <PopoverContent className="w-[200px] p-0" align="start">
          <ItemList items={items} setOpen={setOpen} setSelectedItem={onSelect} labelKey={labelKey} idKey={idKey} />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedItem ? <>{selectedItem[labelKey].eb}</> : <>Select Item</>}
        </Button>
      </DrawerTrigger>
      {selectedItem &&
        Array.isArray(selectedItem[tagsKey]) &&
        selectedItem[tagsKey].map((tag: string, index: number) => <Badge key={index}>{tag}</Badge>)}
      <DrawerContent>
        <div className="mt-4 border-t">
          <ItemList items={items} setOpen={setOpen} setSelectedItem={onSelect} labelKey={labelKey} idKey={idKey} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function ItemList<T extends Record<string, any>>({
  items,
  setOpen,
  setSelectedItem,
  labelKey,
  idKey,
}: {
  items: T[]
  setOpen: (open: boolean) => void
  setSelectedItem: (item: T | null) => void
  labelKey: keyof T
  idKey: keyof T
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter items..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {items.map((item) => (
            <CommandItem
              key={item[idKey] as React.Key}
              value={item[idKey] as string}
              onSelect={(id) => {
                setSelectedItem(items.find((item) => item[idKey] === id) || null)
                setOpen(false)
              }}
            >
              {item[labelKey].en as React.ReactNode}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
