import type { DatabaseTechItem } from "../data/databaseScreenshotsImages";
import { SkillIcon } from "../icons";

export function DatabaseTechStackPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: DatabaseTechItem[];
}) {
  return (
    <aside className="database-stack" aria-label={title}>
      <div className="database-stack__head">
        <span className="database-stack__icon" aria-hidden>
          <SkillIcon name="database" className="h-[1.15rem] w-[1.15rem]" />
        </span>
        <div className="database-stack__copy">
          <p className="database-stack__title">{title}</p>
          <p className="database-stack__sub">{subtitle}</p>
        </div>
      </div>

      <ul className="database-stack__grid m-0 list-none p-0" role="list">
        {items.map((item) => (
          <li key={item.name} className="database-stack__item" role="listitem">
            <span className="database-stack__pill">
              <span className="database-stack__pill-name">{item.name}</span>
              <span className="database-stack__pill-role">{item.role}</span>
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
