// app/products/edit/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function getProduct(id: string) {
  // Using Prisma to fetch a unique product by its productId
  const product = await prisma.products.findUnique({
    where: { productId: id },
  })
  return product
}

async function updateProduct(id: string, formData: FormData) {
  "use server"
  const name = formData.get("name") as string
  const price = Number.parseFloat(formData.get("price") as string)
  const stockQuantity = Number.parseInt(formData.get("stockQuantity") as string)

  if (name && !isNaN(price) && !isNaN(stockQuantity)) {
    // Using Prisma to update the product record
    await prisma.products.update({
      where: { productId: id },
      data: { name, price, stockQuantity },
    })
    revalidatePath("/products")
    redirect("/products")
  }
}

export default async function EditProduct({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = await getProduct(id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form action={updateProduct.bind(null, id)} className="space-y-4">
        <div>
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            name="name"
            defaultValue={product.name}
            required
          />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            name="price"
            type="number"
            step="0.01"
            defaultValue={product.price}
            required
          />
        </div>
        <div>
          <Label htmlFor="stockQuantity">Stock Quantity</Label>
          <Input
            id="stockQuantity"
            name="stockQuantity"
            type="number"
            defaultValue={product.stockQuantity}
            required
          />
        </div>
        <Button type="submit">Update Product</Button>
      </form>
    </div>
  )
}
