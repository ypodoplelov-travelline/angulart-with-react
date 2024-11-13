import { ru } from 'date-fns/locale/ru'
import { setDefaultOptions } from 'date-fns/setDefaultOptions'

export function setLang(lang: 'en' | 'ru') {
  if (lang === 'ru') {
    setDefaultOptions({
      locale: ru,
    })
    return
  }

  setDefaultOptions({
    locale: undefined,
  })
}

setLang('ru')
