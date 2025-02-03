// app/products/page.tsx
import ProductList from "@/components/ProductList"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import prisma from "@/lib/prisma"
import { Plus } from "lucide-react"
import { revalidatePath } from "next/cache"
import Link from "next/link"

async function getProducts() {
  const productList = await prisma.products.findMany({
    orderBy: {
      productId: "asc",
    },
  })
  return productList || []
}

async function deleteProduct(formData: FormData) {
  "use server"
  const productId = formData.get("productId") as string
  if (productId) {
    await prisma.products.delete({
      where: { productId },
    })
    revalidatePath("/products")
  }
}

export default async function ProductListPage() {
  const productList = await getProducts()

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product List</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/products/add">New Product</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/import">Import Products</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ProductList products={productList} deleteProductAction={deleteProduct} />
    </div>
  )
}

