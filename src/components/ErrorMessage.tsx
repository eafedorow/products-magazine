import React from 'react'

interface Props {
    error: string;
}

export const ErrorMessage = ({error}: Props) => {
    return (
        <p className="text-center text-red-500">{error}</p>
    )
}