import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './constants/theme';
import { AppRouter } from "./router/AppRouter";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const App: React.FC = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <AppRouter />
        </DndProvider>
      </ThemeProvider>
    </>
  )
}