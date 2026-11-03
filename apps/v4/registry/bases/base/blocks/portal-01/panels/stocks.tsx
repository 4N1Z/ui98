import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Progress } from "@/registry/bases/base/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"

const QUOTES = [
  { ticker: "MSFT", name: "Microsoft", last: "26.24", change: "+0.42" },
  { ticker: "AAPL", name: "Apple Computer", last: "22.49", change: "+1.06" },
  { ticker: "YHOO", name: "Yahoo!", last: "33.18", change: "-0.57" },
  { ticker: "AOL", name: "AOL Time Warner", last: "16.02", change: "-0.21" },
  { ticker: "NOK", name: "Nokia", last: "15.86", change: "+0.11" },
  { ticker: "PALM", name: "Palm", last: "17.40", change: "-1.32" },
]

export function StocksPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Stocks</CardTitle>
        <CardDescription>Quotes delayed at least 20 minutes</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Symbol</TableHead>
              <TableHead className="text-right">Last</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {QUOTES.map((quote) => {
              const up = quote.change.startsWith("+")
              return (
                <TableRow key={quote.ticker}>
                  <TableCell>
                    <span className="font-bold text-primary">
                      {quote.ticker}
                    </span>
                    <span className="text-muted-foreground ml-2 text-xs">
                      {quote.name}
                    </span>
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {quote.last}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={up ? "default" : "destructive"}
                      className={
                        up
                          ? "border-[#1a7a1a] bg-[linear-gradient(to_bottom,#8ee08e,#2cb52c_50%,#1f9a1f)]"
                          : undefined
                      }
                    >
                      {up ? <TrendingUpIcon /> : <TrendingDownIcon />}
                      {quote.change}
                    </Badge>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold">Market mood</span>
          <span className="text-muted-foreground tabular-nums">
            62% bullish
          </span>
        </div>
        <Progress value={62} aria-label="Market mood" />
      </CardFooter>
    </Card>
  )
}
