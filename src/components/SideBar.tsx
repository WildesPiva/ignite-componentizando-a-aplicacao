import { Button } from "./Button";

interface Genre {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}
interface SidebarProps {
  activeGenreId: number;
  onClickGenre: (id: number) => void;
  genres: Genre[];
}

export function SideBar({ genres, onClickGenre, activeGenreId }: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickGenre(genre.id)}
            selected={activeGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
