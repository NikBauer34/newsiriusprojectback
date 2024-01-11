import React, { FC } from 'react'
import { Input } from '@mantine/core'
import './DefInput.css'
const DefInput: FC = (props: any) => {
    return (
        <div className='input_container'>
            <Input {...props} height="100%" width="100%" display='flex' className='input'/>
        </div>
    )
}
export default DefInput