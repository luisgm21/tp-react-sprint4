import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import CartModal from '../components/featureMovies/CartModal'
import { NAV_LINKS } from '../router/navigationConfig'

const MainLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cartItems')
      return savedCart ? JSON.parse(savedCart) : []
    } catch (error) {
      console.error('Error al leer carrito de localStorage:', error)
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    } catch (error) {
      console.error('Error al guardar carrito en localStorage:', error)
    }
  }, [cartItems])

  const handleOpenCart = () => setIsCartOpen(true)
  const handleCloseCart = () => setIsCartOpen(false)

  const handleAddToCart = (movie) => {
    setCartItems((currentItems) => [...currentItems, movie])
    setIsCartOpen(true)
  }

  const handleRemoveFromCart = (movieId) => {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex((item) => item.id === movieId)

      if (itemIndex === -1) {
        return currentItems
      }

      return currentItems.filter((_, index) => index !== itemIndex)
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        links={NAV_LINKS}
        cartCount={cartItems.length}
        onOpenCart={handleOpenCart}
      />
      <main className="flex-1 p-5">
        <Outlet context={{ addToCart: handleAddToCart }} />
      </main>
      <Footer />
      <CartModal
        isOpen={isCartOpen}
        items={cartItems}
        onClose={handleCloseCart}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  )
}

export default MainLayout