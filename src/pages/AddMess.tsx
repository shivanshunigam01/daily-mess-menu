import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2),
  address: z.string().min(5),
  phone: z.string().min(8),
  mapsLink: z.string().url(),
  image: z.string().url().optional(),
  breakfast: z.string().optional(),
  lunch: z.string().optional(),
  snacks: z.string().optional(),
  dinner: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const AddMess = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    console.log("New mess submitted", values);
    toast({ title: "Submitted", description: "Your mess has been submitted for review." });
    reset();
  };

  return (
    <main className="container py-8">
      <Helmet>
        <title>Add Your Mess | The Daily Plate</title>
        <meta name="description" content="List your mess on The Daily Plate. Add details, phone, maps link, and menus for each meal." />
        <link rel="canonical" href="/add-mess" />
      </Helmet>

      <h1 className="text-3xl font-heading font-semibold mb-6">Add Your Mess</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-2xl">
        <Input placeholder="Mess name" {...register("name")} aria-invalid={!!errors.name} />
        {errors.name && <p className="text-sm text-destructive">Name is required</p>}

        <Textarea placeholder="Address" {...register("address")} aria-invalid={!!errors.address} />
        {errors.address && <p className="text-sm text-destructive">Address is required</p>}

        <Input placeholder="Phone" {...register("phone")} aria-invalid={!!errors.phone} />
        {errors.phone && <p className="text-sm text-destructive">Phone is invalid</p>}

        <Input placeholder="Google Maps link" {...register("mapsLink")} aria-invalid={!!errors.mapsLink} />
        {errors.mapsLink && <p className="text-sm text-destructive">Enter a valid URL</p>}

        <Input placeholder="Image URL (optional)" {...register("image")} />

        <Textarea placeholder="Breakfast items (comma separated)" {...register("breakfast")} />
        <Textarea placeholder="Lunch items (comma separated)" {...register("lunch")} />
        <Textarea placeholder="Evening Snacks (comma separated)" {...register("snacks")} />
        <Textarea placeholder="Dinner items (comma separated)" {...register("dinner")} />

        <div className="flex gap-2">
          <Button type="submit" disabled={isSubmitting}>Submit</Button>
          <Button type="button" variant="outline" onClick={() => reset()}>Reset</Button>
        </div>
      </form>
    </main>
  );
};

export default AddMess;
