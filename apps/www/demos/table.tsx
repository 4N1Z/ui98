import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "ui98"

const files = [
  {
    name: "WIN.INI",
    size: "4 KB",
    type: "Configuration Settings",
    modified: "8/24/96 11:11 AM",
  },
  {
    name: "SYSTEM.INI",
    size: "2 KB",
    type: "Configuration Settings",
    modified: "8/24/96 11:11 AM",
  },
  {
    name: "NOTEPAD.EXE",
    size: "34 KB",
    type: "Application",
    modified: "7/11/95 9:50 AM",
  },
  {
    name: "CLOUDS.BMP",
    size: "301 KB",
    type: "Bitmap Image",
    modified: "7/11/95 9:50 AM",
  },
  {
    name: "TADA.WAV",
    size: "27 KB",
    type: "Wave Sound",
    modified: "7/11/95 9:50 AM",
  },
]

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>Contents of C:\WINDOWS</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Size</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Modified</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow key={file.name}>
            <TableCell className="font-medium">{file.name}</TableCell>
            <TableCell className="text-right">{file.size}</TableCell>
            <TableCell>{file.type}</TableCell>
            <TableCell>{file.modified}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>
            5 object(s) - 368 KB (Disk free space: 112 MB)
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
