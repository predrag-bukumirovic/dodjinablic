import type { ServiceIcon as Name } from "@/data/content";
import { Building2, Calendar, Film, Moon, Sparkle, User } from "lucide-react";

const map = { user: User, building: Building2, moon: Moon, sparkle: Sparkle, calendar: Calendar, film: Film };

export default function ServiceIcon({ name, className }: { name: Name; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} />;
}
