import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "ui98"

export default function PaginationDemo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm">Guestbook entries 21-30 of 412</span>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" text="Older" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">42</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" text="Newer" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
