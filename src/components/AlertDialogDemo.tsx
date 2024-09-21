import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";

// Define props type
interface AlertDialogDemoProps {
    triggerText: string;
    title: string;
    description: string;
    actionText: string;
    onAction: () => void;
}

// AlertDialogDemo component with customizable text and action function
export function AlertDialogDemo({
    triggerText,
    title,
    description,
    actionText,
    onAction,
}: AlertDialogDemoProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className="hover:bg-red-500 hover:text-white"
                    variant="outline">{triggerText}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="hover:bg-green-500 hover:text-white">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="hover:bg-red-600 bg-red-500 text-white" onClick={onAction}>{actionText}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

