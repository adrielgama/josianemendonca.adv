import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

interface ShareButtonProps {
  children: React.ReactNode
  label: string
  onClick: () => void
}
export const ShareButton: React.FC<ShareButtonProps> = ({
  children,
  label,
  onClick,
}) => (
  <Button
    variant="link"
    className="flex flex-row items-center gap-4"
    onClick={onClick}
    aria-label={label}
  >
    {children}
    <Label htmlFor="maxHeight" className="cursor-pointer">
      {label}
    </Label>
  </Button>
)
