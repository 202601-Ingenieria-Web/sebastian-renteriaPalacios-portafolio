import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";
type CardProps = {
  title: string;
  icon: string;
  description: string;
}
const Index = ({ title, icon, description }: CardProps) => {
  return (
    <Card className="w-full text-center p-6 hover:shadow-lg transition">
  
  <CardHeader className="flex flex-col items-center space-y-4">
    
    {/* Contenedor del ícono */}
    <div className="flex items-center justify-center">
      <Icon icon={icon} width="40" height="40" className="text-yellow-500" />
    </div>

    <CardTitle>{title}</CardTitle>

  </CardHeader>

  <CardContent>
    <p className="text-sm text-gray-600">{description}</p>
  </CardContent>

</Card>
  )
}

export default Index