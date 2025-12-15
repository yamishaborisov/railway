import { useRef, useState } from 'react'
import { ActionCard, Input } from '@/shared'

type ApplyCodeProps = {
    className?: string
}

export const ApplyCode = ({ className }: ApplyCodeProps) => {
    const [code, setCode] = useState('')
    const codeRef = useRef<HTMLInputElement | null>(null)

    return (
        <ActionCard title="Apply Code" className={className}>
            <Input
                variant="code"
                placeholder="Enter Code"
                onChange={setCode}
                value={code}
                ref={codeRef}
            />
        </ActionCard>
    )
}
