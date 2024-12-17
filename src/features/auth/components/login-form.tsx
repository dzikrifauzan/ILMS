import { Link, useSearchParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { paths } from '@/config/paths';
import { useLogin, useUser } from '@/stores/auth';
import { loginInputSchema } from '@/stores/auth/api';

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [searchParams] = useSearchParams();
  const login = useLogin(onSuccess);
  const [user] = useUser();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <div>
      <Form
        onSubmit={(values) => {
          login(values);
        }}
        schema={loginInputSchema}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="email"
              label="Email Address"
              placeholder="steven@toyota.co.id"
              error={formState.errors['email']}
              registration={register('email')}
            />
            <Input
              type="password"
              label="Password"
              placeholder="password"
              error={formState.errors['password']}
              registration={register('password')}
            />
            <div>
              <Button
                isLoading={user.status === 'loading'}
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Log in
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="mt-2 flex items-center justify-center">
        <div className="text-sm">
          dont have an account?
          <Link
            to={paths.auth.register.getHref(redirectTo)}
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Create Account here!
          </Link>
        </div>
      </div>
    </div>
  );
};
