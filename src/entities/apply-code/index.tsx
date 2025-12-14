import { useRef, useState } from 'react'
import { Card, Input } from '@/shared'
import styles from './styles.module.scss'

export const ApplyCode = () => {
    const [code, setCode] = useState('')
    const codeRef = useRef<HTMLInputElement | null>(null)

    return (
        <Card bg="white" border="solid" size="normal">
            <div className={styles.applyWrapper}>
                <p className={styles.title}>Apply Code</p>
                <Input
                    variant="code"
                    placeholder="Enter Code"
                    onChange={setCode}
                    value={code}
                    ref={codeRef}
                />
            </div>
        </Card>
    )
}
