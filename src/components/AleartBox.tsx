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
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

interface AlertDialogDemoProps {
    triggerText: any;
    triggerTextStyle?: string
    headingText: string;
    headingTextStyle?: string;
    contentText?: string;
    contentTextStyle?: string;
    submitBtn: any;
    submitBtnNavigation: () => void;
}

export function AlertDialogDemo({
    triggerText,
    triggerTextStyle,
    headingText,
    headingTextStyle,
    contentText,
    contentTextStyle,
    submitBtn,
    submitBtnNavigation,
}: AlertDialogDemoProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className={`${triggerTextStyle}`}>
                    {triggerText}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className={`${headingTextStyle}`}>{headingText}</AlertDialogTitle>
                    <AlertDialogDescription className={`${contentTextStyle}`}>
                        {contentText}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="w-32 border-black border-2">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="w-32" onClick={submitBtnNavigation}>
                        {submitBtn}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
