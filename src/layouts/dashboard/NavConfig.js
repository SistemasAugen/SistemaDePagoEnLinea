// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Inicio prueba',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Mis Recetas',
    path: '/dashboard/user',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Pago',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Factura',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Iniciar sesion',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'Registrar',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Pagina no encontrada',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
