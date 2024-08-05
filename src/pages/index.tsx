import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [currentTab, setCurrentTab] = useState<'all' | 'pending' | 'completed'>(
    'all'
  )

  const handleTabChange = (value: string) => {
    if (value === 'all' || value === 'pending' || value === 'completed') {
      setCurrentTab(value)
    }
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root
          className="pt-10"
          value={currentTab}
          onValueChange={handleTabChange}
        >
          <Tabs.List className="flex space-x-4">
            <Tabs.Trigger
              className={`rounded-full border px-4 py-2 text-sm font-bold ${
                currentTab === 'all'
                  ? 'border-[#334155] bg-[#334155] text-white'
                  : 'border-gray-200 text-gray-600'
              }`}
              value="all"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`rounded-full border px-4 py-2 text-sm font-bold ${
                currentTab === 'pending'
                  ? 'border-[#334155] bg-[#334155] text-white'
                  : 'border-gray-200 text-gray-600'
              }`}
              value="pending"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`rounded-full border px-4 py-2 text-sm font-bold ${
                currentTab === 'completed'
                  ? 'border-[#334155] bg-[#334155] text-white'
                  : 'border-gray-200 text-gray-600'
              }`}
              value="completed"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content className="pt-6" value="all">
            <TodoList filter="all" />
          </Tabs.Content>
          <Tabs.Content className="pt-6" value="pending">
            <TodoList filter="pending" />
          </Tabs.Content>
          <Tabs.Content className="pt-6" value="completed">
            <TodoList filter="completed" />
          </Tabs.Content>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
