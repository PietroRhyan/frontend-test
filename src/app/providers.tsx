'use client'

import { ReactNode } from 'react'

import { HandleMobileMenuProvider } from '@/context/HandleOpenMobileMenu'

import AntdRegistry from '@/lib/AntdRegistry'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import theme from '@/styles/antdThemeConfig'
import StoreProvider from './storeProvider'

type ProviderProps = {
  children: ReactNode
}

export default function Providers({ children }: ProviderProps) {
  return (
    <StoreProvider>
      <AntdRegistry>
        <ConfigProvider theme={theme}>
          <StyleProvider>
            <HandleMobileMenuProvider>{children}</HandleMobileMenuProvider>
          </StyleProvider>
        </ConfigProvider>
      </AntdRegistry>
    </StoreProvider>
  )
}
