import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Enterprise from './pages/Enterprise';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'product', Component: Product },
      { path: 'pricing', Component: Pricing },
      { path: 'enterprise', Component: Enterprise },
      { path: 'resources', Component: Resources },
      { path: '*', Component: NotFound },
    ],
  },
]);