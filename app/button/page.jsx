import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
    return (
        <div className='flex gap-4 items-center flex-col'>
            <Button variant="destructive" size="sm">destructive sm</Button>

            <Button variant="outline" size="lg">outline lg</Button>

            <Button variant="default" size="default">default</Button>

            <Button variant="secondary" size="default">secondary default</Button>
            <Button variant="ghost" size="icon">ghost icon</Button>
            <Button variant="link" size="lg">link</Button>

            <Button variant="ghost" size="lg">ghost lg</Button>

            


        </div>
    )
}

export default page