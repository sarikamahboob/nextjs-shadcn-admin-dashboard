"use client"

import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { Card } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { Calendar } from '../ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Calendar1Icon } from 'lucide-react'
import { format } from 'date-fns'

const TodoList = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [open, setOpen] = React.useState(false)
  return (
    <div className=''>
      <h1 className='text-lg font-medium mb-4'>ToDo List</h1>
      <div className='mb-4'>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className='w-full'>
              <Calendar1Icon />
              {
                date ? format(date, "PPP") : <span className='sr-only'>Today</span>
              }
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date)=> {
                setDate(date)
                setOpen(false)
              }}
              className="rounded-lg border"
            />
          </PopoverContent>
        </Popover>
      </div>
      
      {/* LIST */}
      <ScrollArea className='h-[500px]'>
        {/* LIST ITEM */}
        <Card className='mb-2'>
          <div className='flex items-center gap-4 px-4'>
            <Checkbox id="item-1" />
            <label htmlFor="item-1" className='text-sm text-muted-foreground'>Click the checkbox to toggle the item</label>
          </div>
        </Card>
        <Card className='mb-2'>
          <div className='flex items-center gap-4 px-4'>
            <Checkbox id="item-2" />
            <label htmlFor="item-2" className='text-sm text-muted-foreground'>Click the checkbox to toggle the item</label>
          </div>
        </Card>
        <Card className='mb-2'>
          <div className='flex items-center gap-4 px-4'>
            <Checkbox id="item-3" />
            <label htmlFor="item-3" className='text-sm text-muted-foreground'>Click the checkbox to toggle the item</label>
          </div>
        </Card>
        <Card className='mb-2'>
          <div className='flex items-center gap-4 px-4'>
            <Checkbox id="item-4" />
            <label htmlFor="item-4" className='text-sm text-muted-foreground'>Click the checkbox to toggle the item</label>
          </div>
        </Card>
        <Card className='mb-2'>
          <div className='flex items-center gap-4 px-4'>
            <Checkbox id="item-5" />
            <label htmlFor="item-5" className='text-sm text-muted-foreground'>Click the checkbox to toggle the item</label>
          </div>
        </Card>
        <Card className='mb-2'>
          <div className='flex items-center gap-4 px-4'>
            <Checkbox id="item-6" />
            <label htmlFor="item-6" className='text-sm text-muted-foreground'>Click the checkbox to toggle the item</label>
          </div>
        </Card>
      </ScrollArea>
    </div>
  )
}

export default TodoList