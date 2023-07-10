import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartProvider";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import { UserProvider } from "./context/UserProvider";
import { MainLayout } from "./layouts";
import { AppRoutes } from "./routes";

function App() {
  return (
    <UserProvider>
      <DrinksProvider>
        <CategoriesProvider>
          <CartProvider>
            <MainLayout>
              <AppRoutes />
            </MainLayout>
          </CartProvider>
        </CategoriesProvider>
      </DrinksProvider>
    </UserProvider>
  );
}

export default App;
