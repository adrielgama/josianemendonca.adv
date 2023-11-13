import React from 'react'

import { Skeleton } from '../ui/skeleton'

export const CardSkeleton = () => {
  return (
    <div className="container grid place-items-center pb-10">
      <div className="flex items-center space-x-4">
        <div className="space-y-2">
          <Skeleton className="h-28 w-[350px]" />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <Skeleton className="h-4 w-[100px]" />
          </div>
          <Skeleton className="h-7" />
          <Skeleton className="h-4" />
          <Skeleton className="h-10" />
        </div>
      </div>
    </div>
  )
}
