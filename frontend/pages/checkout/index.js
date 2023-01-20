import React, { useState } from 'react'

const Checkout = () => {
  const [productCount, setProductCount] = useState(0)

  return (
    <div>
      {/* delivery email  */}
      {/* buy buttons */}
      {/* purchase details is sent to delivery email and purchase email, if delivery email is blank details
      will just go to purchase email */}
      {productCount === 0 ? (
        <div>You have not added any products</div>
      ) : (
        <div>Show final checkout</div>
      )}
    </div>
  )
}

export default Checkout