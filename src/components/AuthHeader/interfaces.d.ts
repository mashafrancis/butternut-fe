export interface AuthHeaderProps {
  title: string;
  history?: {
    goBack: () => void;
    [key: string]: any;
  };
}
