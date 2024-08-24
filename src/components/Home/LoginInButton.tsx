"use client"
import React, { FC } from 'react'
import { Button } from '../Button'
import { open } from '../LoginModal.store'
import { useLocaleContext } from '../Localization/LocaleContext'

export const LoginInButton: FC = () => {
    const { locale } = useLocaleContext()

    return (
        <Button color="secondary" onClick={open} className="w-64 uppercase">
            {T[locale].login}
        </Button>
    )
}

const en = {
    login: "Login into my account"
}
const pt: typeof en = {
    login: "Entrar na minha conta"
}
const es: typeof en = {
    login: "Iniciar sesión en mi cuenta"
}
const fr: typeof en = {
    login: "Se connecter à mon compte"
}
const de: typeof en = {
    login: "In meinen Account einloggen"
}
const T = { en, pt, es, fr, de }

