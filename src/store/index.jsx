import { configureStore } from '@reduxjs/toolkit'
import isDarkSlice from './slices/isDark.slice'

export default configureStore({
    reducer: {
        isDark: isDarkSlice
    }
})
