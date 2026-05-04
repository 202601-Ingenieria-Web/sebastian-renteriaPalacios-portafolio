import { Badge } from "@/components/ui/badge"
type BadgeProps = {
    date: string;
}
const Index = ({ date }: BadgeProps) => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-2">
      <Badge>{date}</Badge>
    </div>
  )
}

export default Index