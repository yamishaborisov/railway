import { Controller, useForm } from 'react-hook-form'
import { Button, Card, Input, RadioBtn } from '@/shared'
import styles from './styles.module.scss'

type PaymentMethod = 'credit-card' | 'paypal' | 'bitcoin'

type PaymentFormData = {
    paymentMethod: PaymentMethod
    cardNumber: string
    expirationDate: string
    cardholder: string
    cvc: string
}

type PayFormProps = {
    onSubmit?: (data: PaymentFormData) => void
    onCancel?: () => void
}

export const PayForm = ({ onSubmit, onCancel }: PayFormProps) => {
    const { control, handleSubmit, watch } = useForm<PaymentFormData>({
        defaultValues: {
            paymentMethod: 'credit-card',
            cardNumber: '',
            expirationDate: '',
            cardholder: '',
            cvc: '',
        },
    })

    const selectedMethod = watch('paymentMethod')

    const handleFormSubmit = (data: PaymentFormData) => {
        onSubmit?.(data)
    }

    return (
        <Card size="normal" bg="white" border="solid" className={styles.card}>
            <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Payment Method</h2>
                    <p className={styles.subtitle}>Please enter your payment method</p>
                </div>

                <div className={styles.methods}>
                    {/* Credit Card */}
                    <div className={styles.methodBlock}>
                        <div className={styles.methodHeader}>
                            <Controller
                                name="paymentMethod"
                                control={control}
                                render={({ field }) => (
                                    <div className={styles.radioItem}>
                                        <RadioBtn
                                            name="paymentMethod"
                                            value="credit-card"
                                            label="Credit Card"
                                            checked={field.value === 'credit-card'}
                                            onChange={field.onChange}
                                            labelClassName={styles.payFormLabel}
                                            type="payment"
                                        />
                                    </div>
                                )}
                            />
                            <div className={styles.cardIcons}>
                                <img src="/images/visa.svg" alt="Visa" />
                                <img src="/images/mastercard.svg" alt="Mastercard" />
                            </div>
                        </div>

                        {selectedMethod === 'credit-card' && (
                            <div className={styles.cardFields}>
                                <div className={styles.fieldRow}>
                                    <Controller
                                        name="cardNumber"
                                        control={control}
                                        rules={{ required: 'Card number is required' }}
                                        render={({ field }) => (
                                            <Input
                                                variant="visa"
                                                label="Card Number"
                                                placeholder="0000 0000 0000 0000"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="expirationDate"
                                        control={control}
                                        rules={{ required: 'Expiration date is required' }}
                                        render={({ field }) => (
                                            <Input
                                                variant="visa"
                                                label="Expiration Date"
                                                placeholder="MM / YY"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                </div>
                                <div className={styles.fieldRow}>
                                    <Controller
                                        name="cardholder"
                                        control={control}
                                        rules={{ required: 'Cardholder name is required' }}
                                        render={({ field }) => (
                                            <Input
                                                variant="visa"
                                                label="Cardholder"
                                                placeholder="Cardholder name"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="cvc"
                                        control={control}
                                        rules={{ required: 'CVC is required' }}
                                        render={({ field }) => (
                                            <Input
                                                variant="visa"
                                                label="CVC"
                                                placeholder="CVC"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* PayPal */}
                    <div className={styles.methodBlock}>
                        <Controller
                            name="paymentMethod"
                            control={control}
                            render={({ field }) => (
                                <RadioBtn
                                    name="paymentMethod"
                                    value="paypal"
                                    label="PayPal"
                                    checked={field.value === 'paypal'}
                                    onChange={field.onChange}
                                    labelClassName={styles.payFormLabel}
                                    type="payment"
                                />
                            )}
                        />
                    </div>

                    {/* Bitcoin */}
                    <div className={styles.methodBlock}>
                        <Controller
                            name="paymentMethod"
                            control={control}
                            render={({ field }) => (
                                <RadioBtn
                                    name="paymentMethod"
                                    value="bitcoin"
                                    label="Bitcoin"
                                    checked={field.value === 'bitcoin'}
                                    onChange={field.onChange}
                                    labelClassName={styles.payFormLabel}
                                    type="payment"
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={styles.security}>
                    <img src="/images/shield.svg" alt="" className={styles.shieldIcon} />
                    <span>All your data are safe</span>
                </div>

                <p className={styles.disclaimer}>
                    Discounts, offers and price concessions will be applied later during payment
                </p>

                <div className={styles.actions}>
                    <Button type="submit" size="lg" variant="solid" className={styles.submitBtn}>
                        Book Now
                    </Button>
                    <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        tone="danger"
                        className={styles.cancelBtn}
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </Card>
    )
}
